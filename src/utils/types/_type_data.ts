export interface _Data {
  categories: _Data_Category[]
}

export interface _Data_Item {
  id: string
  title: string
  img: string
  description?: string
}

export interface _Data_Category {
  title: string
  items: _Data_Item[]
}
