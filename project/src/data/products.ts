export interface Product {
  id: string;
  name: string;
  image: string;
}

export interface InteractionResult {
  compatible: boolean;
  message: string;
}

export const products: Product[] = [
  {
    id: 'warfarin',
    name: 'Warfarin',
    image: 'https://images.pexels.com/photos/6290583/pexels-photo-6290583.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'aspirin',
    name: 'Aspirin',
    image: 'https://images.pexels.com/photos/6291326/pexels-photo-6291326.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const getInteractionResult = (product1: string, product2: string): InteractionResult => {
  // For the demo, Warfarin and Aspirin are always incompatible
  if ((product1 === 'warfarin' && product2 === 'aspirin') || 
      (product1 === 'aspirin' && product2 === 'warfarin')) {
    return {
      compatible: false,
      message: 'warningMessage'
    };
  }
  
  // Same product is considered compatible
  return {
    compatible: true,
    message: 'These products can be used together safely.'
  };
};