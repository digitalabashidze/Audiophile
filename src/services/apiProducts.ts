import { supabase } from './supabase'
import { Product, RelatedProductDetail } from '../types/generalTypes'

export interface ExtendedProduct extends Product {
	related_products_details: RelatedProductDetail[]
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
		console.error(categoryError.message)
		throw new Error('Category not found')
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
		throw new Error('Product not found')
	}

	return data as Product[]
}

export const getProductsById = async (
	productId: string
): Promise<ExtendedProduct> => {
	const { data: productData, error: productError } = await supabase
		.from('products')
		.select(
			`
            *,
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
		.eq('id', productId)
		.single()

	if (productError) {
		console.error('Error fetching product:', productError)
		throw new Error('Product not found')
	}

	if (!productData) {
		throw new Error('Product data not found')
	}

	const mainProduct: ExtendedProduct = {
		...productData,
		related_products_details: [],
	}

	const relatedProductsIds = mainProduct.related_products.map(
		rp => rp.related_product_id
	)
	const { data: relatedProductsData, error: relatedProductsError } =
		await supabase
			.from('products')
			.select(
				`*,  product_images (
                id,
                type,
                mobile_url,
                tablet_url,
                desktop_url
            )
    `
			)
			.in('id', relatedProductsIds)

	if (relatedProductsError) {
		console.error('Error fetching related products:', relatedProductsError)
		throw new Error('Related products not found')
	}

	if (relatedProductsData) {
		mainProduct.related_products_details =
			relatedProductsData as RelatedProductDetail[]
	}

	return mainProduct
}
