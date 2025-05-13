export const color = [
    "white",
    "black",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "gray",
    "orange",
    "brown",
    "cyan",
    "maroon",
    "pink",
    "navy",

]
export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "red", label: "Red" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
            { value: "purple", label: "Purple" },
            { value: "pink", label: "Pink" },
            { value: "gray", label: "Gray" },
            { value: "orange", label: "Orange" },
            { value: "brown", label: "Brown" },
            { value: "cyan", label: "Cyan" },
            { value: "maroon", label: "Maroon" },
            { value: "navy", label: "Navy" },
        ]
    },
    {
        id: 2,
        name: 'Size',
        options: [
            { value: 'xs', label: 'XS' },
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
        ]
    }
]
export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "Rs100-Rs500", label: "Rs0-Rs50" },
            { value: "Rs500-Rs1000", label: "Rs50-Rs100" },
            { value: "Rs1000-Rs1500", label: "Rs1000-Rs15000" },
            { value: "Rs1500-Rs2000", label: "Rs1500-Rs2000" },
            { value: "Rs2000+", label: "Rs2000+" },
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10%", label: "10%" },
            { value: "20%", label: "20%" },
            { value: "30%", label: "30%" },
            { value: "40%", label: "40%" },
            { value: "40%", label: "40%" },
            { value: "50%", label: "50%" },
            { value: "60%", label: "60%" },
            { value: "70%", label: "70%" },

        ]
    },
    {
        id:"stock",
        name:"Stock",
        options:[
            {value:"inStock",label:"In Stock"},
            {value:"outOfStock",label:"Out Of Stock"},
        ]
    }
]
export const sortBy = [
    {name:"Price: Low to High",query:"price_low",current:false},
    {name:"Price: High to Low",query:"price_high",current:false},
]