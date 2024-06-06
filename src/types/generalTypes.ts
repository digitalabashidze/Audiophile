export interface ProductImage {
	id: number
	type: string
	mobile_url: string
	tablet_url: string
	desktop_url: string
}

export interface ProductInclude {
	id: number
	quantity: number
	item: string
}

export interface RelatedProduct {
	id: number
	related_product_id: number
}

export interface Product {
	id: number
	slug: string
	name: string
	category_id: number
	new: boolean
	price: number
	description: string
	features: string
	features_2: string
	product_images: ProductImage[]
	product_includes: ProductInclude[]
	related_products: RelatedProduct[]
}

export interface Category {
	id: number
	name: string
}

export interface RelatedProductDetail {
	id: number
	slug: string
	name: string
	category_id: number
	new: boolean
	price: number
	description: string
	features: string
	product_images: ProductImage[]
}
