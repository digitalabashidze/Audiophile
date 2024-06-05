import { supabase } from './supabase'
import { Product } from '../types/generalTypes'

export const getProducts = async () => {
	const { data, error } = await supabase.from('products').select(` id,
      slug,
      name,
      category_id,
      new,
      price,
      description,
      features,
      product_images (
        id,
        type,
        mobile_url,
        tablet_url,
        desktop_url
      ),
      product_includes (
        id,
        quantity,
        item
      )`)

	if (error) {
		throw new Error(error.message)
	}

	return data
}

export const getProductsByCategoryName = async (
	categoryName: string
): Promise<Product[]> => {
	const { data: categoryData, error: categoryError } = await supabase
		.from('categories')
		.select('id')
		.eq('name', categoryName)
		.single()

	if (categoryError) {
		throw new Error(categoryError.message)
	}

	const categoryId = categoryData?.id

	if (!categoryId) {
		throw new Error(`Category with name ${categoryName} not found.`)
	}

	const { data, error: productsError } = await supabase
		.from('products')
		.select(
			`
    id,
    slug,
    name,
    category_id,
    new,
    price,
    description,
    features,
    product_images (
      id,
      type,
      mobile_url,
      tablet_url,
      desktop_url
    ),
    product_includes (
      id,
      quantity,
      item
    ),
     related_products:related_products!related_products_product_id_fkey (
        id,
        related_product_id
      )
  `
		)
		.eq('category_id', categoryId)

	if (productsError) {
		console.error('Error fetching products:', productsError)
		throw new Error(productsError.message)
	}

	return data as Product[]
}
