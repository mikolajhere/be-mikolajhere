export interface NewAdEntity extends Omit<AdEntity, "id"> {
  id?: string;
}

export interface SimpleAdEntity {
  id: string; 
}

export interface AdEntity extends SimpleAdEntity {
  title: string;
  description: string;
  content: string;
  dateCreated: Date;
  dateUpdated: Date;
}
