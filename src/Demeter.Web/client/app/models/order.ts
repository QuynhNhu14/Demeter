export interface OrderItem {
  id: number
  quantity: number
  dateCreated: Date | string
  product: Product
}

export interface Product {
  id: number
  name: string
  image?: string
  description?:string
  baseUnitPrice: number
  dateCreated: Date | string
  dateModified: Date | string
}


