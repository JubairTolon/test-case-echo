const style = document.createElement('style');

style.innerHTML = `
.categories__container {
	width: 994px;
	margin: 0 auto;
}
.categories__title {
    color: #464646;
    margin-bottom: 16px;
    font-size: 28px;
    font-weight: 600;
}
.categories__card__wrapper{
	display: flex;
	justify-content: space-between;
}
.single_category {
	text-align: center;
    background-color: #1E9FC4;
    position: relative;
    max-width: 310px;
    width: 100%;
    height: 160px;
    cursor: pointer;
    padding: 20px 20px;
}
.single_category h2{
	margin-top:12px ;
	margin-bottom: 8px ;
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
}
.single_category p{
    font-size: 14px;
    font-weight: 300;
    color: #FFFFFF;
}

.tikMark__container {
    position: absolute;
    right: 10px;
    top: 6px;
    height: 35px;
    width: 35px;
    background-color: #61AF34;
    border: 2px solid #FFFFFF;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.tikMark__none{
	display: none;
}
.block_benefits {
	display: none;
}

.product__info__title{
    border-bottom: 2px solid #464646;
    width: 994px;
    margin: 35px auto 44px auto;
}
.product__info__title p{
    margin-bottom: 8px;
    color: #464646;
    font-size: 16px;
}
.categories__products__container{
	width: 994px;
	margin: 0 auto;
}
.single__category__container{
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
}
.single__category__header{
	display: flex;
	align-items: center;
	margin-bottom: 30px;;
	gap: 8px;
}
.single__category__header h2{
	font-size: 28px;
	font-weight: 600;
	margin: 0;
}
.single__category__header p{
	font-size: 16px;
	font-weight: 600;
	color: #8F8D8D;
}
.single__category__product{
	display: flex;
	background-color: #F5F5F5;
	width: 100%;
	margin-bottom: 30px;
	cursor: pointer;
}
.product__image{
	position: relative;
	width: 395px;
}
.main__image{
	height: 100%;
	width: 100%;
	object-fit: contain;
}
.sub__image{
	position: absolute;
	bottom: 20px;
	left: 26px;
}

.single__product__info{
	padding: 20px 30px;
}
.single__product__info h2{
	font-size: 28px;
	font-weight: 600;
	margin: 0;
}

.product__subTitle{
	margin-top: 10px;
	margin-bottom: 25px;
	font-size: 20px;
	font-weight: 300;
}
.list__container__title{
	margin-bottom: 10px;
		font-size: 16px;
}
.list__container{
	/*display: flex;*/
	/*flex-direction: column;*/
	/*row-gap: 5px;*/
}
.list__container li{
	font-size: 16px;
}

.cta__btn{
	color: white;
	height: 38px;
	border: none;
	border-radius: 8px;
	background-color: #43ACC6;
	margin-top:25px ;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
}


// @media only screen and (max-width: 380px) {
//     .categories__card__wrapper {
//         grid-auto-columns: repeat(1, 1fr);
//         gap: 10px;
//         width: 100%;
//     }
//     .single_category{
//     	margin:  0 auto;
//     	width: 100%;
//     }
// }g

// @media only screen and (max-width: 780px) {
//     .categories__container {
//         flex-wrap: wrap;
//         align-items: center;
//         row-gap: 30px;
//         padding: 0 0;
//     }
//     #categories__title {
//       padding-left: 0;
//     }
// }`
document.head.appendChild(style);



const categoryIcon1 = `<svg width="47" height="51" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.23584 49.6482L43.6448 50.0001" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M4.45288 42.9326V22.9321C4.45288 21.8276 5.34831 20.9321 6.45288 20.9321H8.74541C9.84998 20.9321 10.7454 21.8276 10.7454 22.9321V42.9326C10.7454 44.0372 9.84998 44.9326 8.74541 44.9326H6.45288C5.34831 44.9326 4.45288 44.0372 4.45288 42.9326Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M14.7097 42.9324V22.9319C14.7097 21.8273 15.6051 20.9319 16.7097 20.9319H19.0022C20.1068 20.9319 21.0022 21.8273 21.0022 22.9319V42.9324C21.0022 44.037 20.1068 44.9324 19.0022 44.9324H16.7097C15.6051 44.9324 14.7097 44.037 14.7097 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M25.6709 42.9324V22.9319C25.6709 21.8273 26.5663 20.9319 27.6709 20.9319H29.9634C31.068 20.9319 31.9634 21.8273 31.9634 22.9319V42.9324C31.9634 44.037 31.068 44.9324 29.9634 44.9324H27.6709C26.5663 44.9324 25.6709 44.037 25.6709 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M35.896 42.9324V22.9319C35.896 21.8273 36.7914 20.9319 37.896 20.9319H40.1885C41.2931 20.9319 42.1885 21.8273 42.1885 22.9319V42.9324C42.1885 44.037 41.2931 44.9324 40.1885 44.9324H37.896C36.7914 44.9324 35.896 44.037 35.896 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M23.1021 2L43.1091 16.532H3.09509L23.1021 2Z" stroke="white" stroke-width="2"/>
<path d="M23.0386 14.0766C22.5766 14.0766 22.1412 14.0154 21.7322 13.893C21.3232 13.7705 20.9521 13.5977 20.6189 13.3745C20.2857 13.1441 19.9979 12.8705 19.7555 12.5537C19.5207 12.2297 19.3428 11.8661 19.2216 11.4629H18.6309V10.7392H19.0739C19.0663 10.6816 19.0625 10.6204 19.0625 10.5556C19.0625 10.4836 19.0625 10.4152 19.0625 10.3504C19.0625 10.2784 19.0625 10.21 19.0625 10.1452C19.0701 10.0804 19.0777 10.012 19.0853 9.94H18.6309V9.21637H19.2216C19.3428 8.82035 19.5245 8.46394 19.7669 8.14713C20.0092 7.83031 20.297 7.5603 20.6303 7.3371C20.9635 7.10669 21.3346 6.93028 21.7436 6.80787C22.1525 6.68547 22.5842 6.62427 23.0386 6.62427C23.4249 6.62427 23.7732 6.66747 24.0838 6.75387C24.3943 6.84028 24.6745 6.95908 24.9244 7.11029C25.1743 7.26149 25.394 7.4343 25.5833 7.62871C25.7726 7.82311 25.9393 8.02832 26.0832 8.24433L24.9471 8.79515C24.7654 8.49274 24.5041 8.24433 24.1633 8.04992C23.8225 7.84832 23.4476 7.74751 23.0386 7.74751C22.4933 7.74751 22.0086 7.88072 21.5845 8.14713C21.168 8.40634 20.8612 8.76275 20.6643 9.21637H23.7316V9.94H20.4485C20.4409 10.0048 20.4333 10.0732 20.4258 10.1452C20.4258 10.21 20.4258 10.2784 20.4258 10.3504C20.4258 10.4152 20.4258 10.4836 20.4258 10.5556C20.4258 10.6204 20.4333 10.6816 20.4485 10.7392H23.7316V11.4629H20.653C20.8499 11.9165 21.1566 12.2801 21.5732 12.5537C21.9973 12.8201 22.4858 12.9533 23.0386 12.9533C23.4476 12.9533 23.8225 12.8561 24.1633 12.6617C24.5041 12.4601 24.7654 12.2081 24.9471 11.9057L26.0832 12.4565C25.9393 12.6725 25.7689 12.8777 25.5719 13.0721C25.3826 13.2665 25.163 13.4393 24.913 13.5905C24.6707 13.7417 24.3943 13.8605 24.0838 13.947C23.7732 14.0334 23.4249 14.0766 23.0386 14.0766Z" fill="white"/>
</svg>
`
const categoryIcon2 = `<svg width="65" height="50" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.26667 40.4667V2C5.26667 1.44771 5.71438 1 6.26667 1H58.1333C58.6856 1 59.1333 1.44772 59.1333 2V40.4667M2 49H62.4C62.9523 49 63.4 48.5523 63.4 48V45.2C63.4 44.6477 62.9523 44.2 62.4 44.2H2C1.44772 44.2 1 44.6477 1 45.2V48C1 48.5523 1.44772 49 2 49Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M9.46655 37.8666V4.66663V4.66663H54.9332V37.8666H9.46655Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M25 31.4H22.8667V27.6667L25 25.5333V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
<path d="M28.7334 31.4H26.6001V23.9334L28.7334 21.8V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
<path d="M32.4666 31.4H30.3333V21.8L32.4666 23.9334V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
<path d="M36.2 31.4001H34.0667V23.9334L36.2 21.2667V31.4001Z" fill="white" stroke="white" stroke-linecap="round"/>
<path d="M39.9334 31.4H37.8V19.6667L39.9334 17V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
<path d="M38.8667 11.1333L39.9334 12.2L39.8878 12.2491L41.5334 13.2667L43.1334 9L38.8667 11.1333Z" fill="white"/>
<path d="M21.8 24.4667L28.7334 16.4667L33 19.6667L39.8878 12.2491M39.8878 12.2491L39.9334 12.2L38.8667 11.1333L43.1334 9L41.5334 13.2667L39.8878 12.2491Z" stroke="white" stroke-linecap="round"/>
</svg>
`

const categoryIcon3 = `<svg width="67" height="50" viewBox="0 0 67 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.0654 8.98995H23.3262V15.1489H65.0654V8.98995Z" fill="white"/>
<path d="M45.9644 29.2978H62.0654C63.7222 29.2978 65.0654 27.9546 65.0654 26.2978V15.1489M23.3262 8.98995V4C23.3262 2.34314 24.6693 1 26.3262 1H62.0654C63.7222 1 65.0654 2.34315 65.0654 4V8.98995M23.3262 8.98995H65.0654M23.3262 8.98995V15.1489M65.0654 8.98995V15.1489M65.0654 15.1489H23.3262M23.3262 15.1489V18" stroke="white" stroke-width="2"/>
<path d="M42.7392 34.8511V28.6922H21.8696H1V35.9123H42.7392V34.8511Z" fill="white"/>
<path d="M42.7392 28.6922V34.8511V35.9123M42.7392 28.6922V23.7023C42.7392 22.0454 41.396 20.7023 39.7392 20.7023H4C2.34315 20.7023 1 22.0454 1 23.7023V28.6922M42.7392 28.6922H21.8696H1M1 28.6922V35.9123M42.7392 35.9123V46C42.7392 47.6569 41.396 49 39.7392 49H4C2.34315 49 1 47.6569 1 46V35.9123M42.7392 35.9123H1" stroke="white" stroke-width="2"/>
</svg>
`


const categoriesData = [
    {
        id: 'tagesgeldkonto',
        categoryIcon: categoryIcon1,
        categoryTitle: 'Tagesgeldkonto',
        categorySubTitle: 'Geld parken und 0,6 % Zinsen p. a. sichern',
        active: true,
        products: [
            {
                productImage: 'https://i.ibb.co/zFRhcQ4/image-18.png',
                subImage: 'https://i.ibb.co/5TD8NWD/image-26.png',
                productTitle: 'Tagesgeldkonto',
                productSubTitle: 'Kleine Sparrate, große Träume',
                productInfoListHeading: 'Ihre Vorteile bei der Consorsbank',
                productInfoList: [
                    'kostenloses Girokonto bei monatlichem', 'oder für alle unter 28 Jahren*'
                ],
                productCtA: 'Zum Sparplam',
                productLink: ''
            },
        ]
    },
    {
        id: 'wertpapiere',
        categoryIcon: categoryIcon2,
        categoryTitle: 'Wertpapiere',
        categorySubTitle: 'Vermögensaufbau und Sparen',
        active: true,
        products: [
            {
                productImage: 'https://i.ibb.co/zFRhcQ4/image-18.png',
                subImage: 'https://i.ibb.co/5TD8NWD/image-26.png',
                productTitle: 'Sparplan',
                productSubTitle: 'Kleine Sparrate, große Träume',
                productInfoListHeading: 'Ihre Vorteile bei der Consorsbank:',
                productInfoList: [
                    'kostenloses Girokonto bei monatlichem', 'oder für alle unter 28 Jahren*'
                ],
                productCtA: 'Zum Sparplam',
                productLink: ''
            },
            {
                productImage: 'https://i.ibb.co/zFRhcQ4/image-18.png',
                subImage: 'https://i.ibb.co/5TD8NWD/image-26.png',
                productTitle: 'Wertpapierdepot',
                productSubTitle: 'Kleine Sparrate, große Träume',
                productInfoListHeading: 'Ihre Vorteile bei der Consorsbank:',
                productInfoList: [
                    'kostenloses Girokonto bei monatlichem', 'oder für alle unter 28 Jahren*'
                ],
                productCtA: 'Zum Sparplam',
                productLink: ''
            },
            {
                productImage: 'https://i.ibb.co/zFRhcQ4/image-18.png',
                subImage: 'https://i.ibb.co/5TD8NWD/image-26.png',
                productTitle: 'Junior Depot',
                productSubTitle: 'Kleine Sparrate, große Träume',
                productInfoListHeading: 'Ihre Vorteile bei der Consorsbank:',
                productInfoList: [
                    'kostenloses Girokonto bei monatlichem kostenloses Girokonto bei', 'oder für alle unter 28 Jahren*'
                ],
                productCtA: 'Zum Sparplam',
                productLink: ''
            },

        ]
    },
    {
        id: 'girokonto',
        categoryIcon: categoryIcon3,
        categoryTitle: 'Girokonto',
        categorySubTitle: 'Unsere Klassiker mit Top-Konditionen',
        active: true,
        products: [
            {
                productImage: 'https://i.ibb.co/zFRhcQ4/image-18.png',
                subImage: 'https://i.ibb.co/5TD8NWD/image-26.png',
                productTitle: 'Girokonto Essential',
                productSubTitle: 'Kleine Sparrate, große Träume',
                productInfoListHeading: 'Ihre Vorteile bei der Consorsbank:',
                productInfoList: [
                    'kostenloses Girokonto bei monatlichem', 'oder für alle unter 28 Jahren*'
                ],
                productCtA: 'Zum Sparplam',
                productLink: ''
            },
            {
                productImage: 'https://i.ibb.co/zFRhcQ4/image-18.png',
                subImage: 'https://i.ibb.co/5TD8NWD/image-26.png',
                productTitle: 'Girokonto Unlimited',
                productSubTitle: 'Kleine Sparrate, große Träume',
                productInfoListHeading: 'Ihre Vorteile bei der Consorsbank:',
                productInfoList: [
                    'kostenloses Girokonto bei monatlichemv kostenloses', 'oder für alle unter 28 Jahren*'
                ],
                productCtA: 'Zum Sparplam',
                productLink: ''
            },

        ]
    },
];


let categoriesContainer = `<div class='categories__container'></div>`;
let header = document.querySelector('header');
header.insertAdjacentHTML('afterend', categoriesContainer);

let categoriesTitleHTML = `<h1 class='categories__title'>Wofür interessieren Sie sich?</h1>`;
let categoriesContainerWrapper = document.querySelector('.categories__container');
categoriesContainerWrapper.insertAdjacentHTML('afterbegin', categoriesTitleHTML);

let categoriesCardWrapperHTML = `<div class='categories__card__wrapper'></div>`
categoriesContainerWrapper.insertAdjacentHTML('beforeend', categoriesCardWrapperHTML);

let categoriesCardWrapper = document.querySelector('.categories__card__wrapper');
let tikMarkIcon = ``;


function getId(category) {
    console.log(category);
};

categoriesData.forEach(category => {
    categoriesCardWrapper.insertAdjacentHTML('beforeend', `
	<div id='${category.id}' class='single_category'>
		${category.categoryIcon}
		<h2>${category.categoryTitle}</h2>
		<p>${category.categorySubTitle}</p>
		<div id="tik" class="tikMark__container">
		    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
		        <path d="M7.60829 19L0 11.7309L1.99623 10.283L7.23164 15.2768L17.7778 0L20 1.06376L7.60829 19Z"
		        fill="white" />
		    </svg>
		</div>
	</div>
	` )

    let element = document.getElementById(category.id);

    element.addEventListener("click", function () {
        let foundId = this.id;
        const parent = document.querySelector(`#${foundId}`);
        const tikBox = parent.querySelector('#tik');

        const getTikBoxClass = tikBox.getAttribute('class');
        if (getTikBoxClass === 'tikMark__container') {
            tikBox.setAttribute('class', 'tikMark__none')
        } else {
            tikBox.setAttribute('class', 'tikMark__container')
        }
        console.log(tikBox.getAttribute('class'));

        categoriesData.forEach(data => {
            if (data.id === foundId) {
                if (data.active) {
                    data.active = false;
                } else {
                    data.active = true;
                }
            };
        });
    });
});

function countTotalProduct(data) {
    let total = 0;
    data.forEach(category => {
        if (category.active) {
            total += category.products?.length;
        };
    });
    return total;
};


const productsInfoTitleHTML = `
<div class='product__info__title'>
    <p>Wir haben <strong>${countTotalProduct(categoriesData)} ${countTotalProduct(categoriesData) > 1 ? 'products' : 'product'}</strong>, gefunden, die zu Ihren Interessen passen.</p>
</div>`;
categoriesContainerWrapper.insertAdjacentHTML('afterend', productsInfoTitleHTML);

const categoriesProductsContainerHTML = `<div class='categories__products__container'></div>`
const productsInfoTitle = document.querySelector('.product__info__title');
productsInfoTitle.insertAdjacentHTML('afterend', categoriesProductsContainerHTML);


const demoBlackIcon = `<svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51 7.50507H18.4248V12.3118H51V7.50507Z" fill="#464646"/>
<path d="M36.0927 23.3542H48C49.6568 23.3542 51 22.0111 51 20.3542V12.3118M18.4248 7.50507V4.26935C18.4248 2.61249 19.768 1.26935 21.4248 1.26935H48C49.6568 1.26935 51 2.61249 51 4.26935V7.50507M18.4248 7.50507H51M18.4248 7.50507V12.3118M51 7.50507V12.3118M51 12.3118H18.4248M18.4248 12.3118V14.5369" stroke="#464646" stroke-width="2"/>
<path d="M33.5752 27.6882V22.8815H17.2876H1V28.5164H33.5752V27.6882Z" fill="#464646"/>
<path d="M33.5752 22.8815V27.6882V28.5164M33.5752 22.8815V19.6458C33.5752 17.989 32.232 16.6458 30.5752 16.6458H4C2.34315 16.6458 1 17.989 1 19.6458V22.8815M33.5752 22.8815H17.2876H1M1 22.8815V28.5164M33.5752 28.5164V35.7307C33.5752 37.3875 32.232 38.7307 30.5752 38.7307H4C2.34314 38.7307 1 37.3875 1 35.7307V28.5164M33.5752 28.5164H1" stroke="#464646" stroke-width="2"/>
</svg>
`
const categoriesProductsContainer = document.querySelector('.categories__products__container');

const listTikMark = '';
categoriesData.forEach((category, index) => {

    if (category.active) {
        let categoryProductsContainerHTML = `<div class='single__category__container'></div>`;
        categoriesProductsContainer.insertAdjacentHTML('beforeend', categoryProductsContainerHTML);
        let categoryProductsContainer = categoriesProductsContainer.lastChild

        categoryProductsContainer.insertAdjacentHTML('beforeend', `
			<div class='single__category__header'>
				<div class='category__icon'>${demoBlackIcon}</div>
				<div>
					<h2>${category.categoryTitle}</h2>
					<p>${category.products.length} ${category.products.length > 1 ? 'Produkte' : 'Produkt'}</p>
				</div>
			</div>
		`);

        category.products.forEach(product => {
            categoryProductsContainer.insertAdjacentHTML('beforeend', `
			<div class='single__category__product'>
				<div class='product__image'>
					<img class='main__image' src=${product.productImage} />
					<img class='sub__image' src=${product.subImage} />
				</div>
				<div class='single__product__info'>
					<h2>${product.productTitle}</h2>
					<p class='product__subTitle'>${product.productSubTitle}</p>
					<p class='list__container__title'>${product.productInfoListHeading}</p>
					<div class='list__container'>
						<li>${product.productInfoList[0]}</li>
						<li>${product.productInfoList[1]}</li>
					</div>
					<button class='cta__btn'>${product.productCtA} ></button>
				</div>
			</div>`);
        });
    };
});





