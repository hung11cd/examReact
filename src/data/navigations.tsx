export const navs = [
    {id: 1, link:'/', label:'Home',target:'', childs: []},
    {id: 2, link:'/blog', label:'Blog',target:'', customClass:'has-child',childs: [
      {id: 1,link:'/tech', label:'Tech',target:'' },
      {id: 2,link:'/sport', label:'Sport',target:'' },
      {id: 3,link:'/fashion', label:'Fashion',target:'' }
    ]},
    {id: 3, link:'/category', label:'Category',target:'',childs: []},
    {id: 4, link:'/product', label:'Product',target:'',childs: []},
    {id: 5, link:'/login', label:'Login',target:'',childs: []}
  ];