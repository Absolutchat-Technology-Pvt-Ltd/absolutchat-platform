"use strict";(self.webpackChunkabsolutchat_documentation=self.webpackChunkabsolutchat_documentation||[]).push([[2833],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var r=n.createContext({}),l=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(r.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),h=l(a),p=o,m=h["".concat(r,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(m,s(s({ref:e},d),{},{components:a})):n.createElement(m,s({ref:e},d))}));function p(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,s=new Array(i);s[0]=h;var c={};for(var r in e)hasOwnProperty.call(e,r)&&(c[r]=e[r]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10642:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],c={sidebar_position:3},r="Ecommerce",l={unversionedId:"Dashboard/ecommerce",id:"Dashboard/ecommerce",title:"Ecommerce",description:"Built-in Ecommerce System",source:"@site/docs/Dashboard/ecommerce.md",sourceDirName:"Dashboard",slug:"/Dashboard/ecommerce",permalink:"/absolutchat-platform/docs/Dashboard/ecommerce",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/absolutchat-platform/docs/Dashboard/integrations"},next:{title:"Bot Templates",permalink:"/absolutchat-platform/docs/Dashboard/bot-templates"}},d={},u=[{value:"Built-in Ecommerce System",id:"built-in-ecommerce-system",level:2},{value:"Setup Ecommerce",id:"setup-ecommerce",level:2},{value:"Variants",id:"variants",level:3},{value:"Collections",id:"collections",level:3},{value:"Discounts",id:"discounts",level:3},{value:"Shopping Carts",id:"shopping-carts",level:3},{value:"Orders",id:"orders",level:3},{value:"Settings",id:"settings",level:3},{value:"Use Ecommerce in Flow",id:"use-ecommerce-in-flow",level:2},{value:"Show Products",id:"show-products",level:3},{value:"Add to Cart",id:"add-to-cart",level:3},{value:"Show Cart",id:"show-cart",level:3},{value:"Remove from cart",id:"remove-from-cart",level:3},{value:"Empty Cart",id:"empty-cart",level:3},{value:"Checkout",id:"checkout",level:3},{value:"Buy Only One Product",id:"buy-only-one-product",level:3},{value:"How to use System JSON Variable",id:"how-to-use-system-json-variable",level:3},{value:"System JSON - &quot;SHOP&quot;",id:"system-json---shop",level:3},{value:"System JSON - &quot;ORDER&quot;",id:"system-json---order",level:3},{value:"System JSON - &quot;CART&quot;",id:"system-json---cart",level:3},{value:"System JSON - &quot;SELECT&quot;",id:"system-json---select",level:3},{value:"Single Buy Button",id:"single-buy-button",level:3}],h={toc:u};function p(t){var e=t.components,c=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ecommerce"},"Ecommerce"),(0,i.kt)("h2",{id:"built-in-ecommerce-system"},"Built-in Ecommerce System"),(0,i.kt)("p",null,"With the built-in Ecommerce system, you can easily manage your products and discounts with AbsolutChat. And your bot can then display and sell products for you automatically."),(0,i.kt)("p",null,'To access the Ecommerce system, click "Ecommerce" from the left sidebar on your Dashboard.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-builtinecom",src:a(14076).Z,width:"1920",height:"937"})),(0,i.kt)("h2",{id:"setup-ecommerce"},"Setup Ecommerce"),(0,i.kt)("p",null,"###Prodcuts"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-ecomprods",src:a(41730).Z,width:"1907",height:"833"})),(0,i.kt)("p",null,"Here is where you manage your products. When you add new products,"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-ecomprods",src:a(61265).Z,width:"2494",height:"1164"})),(0,i.kt)("p",null,"Remember to set the availability status for the product. Utilize the Organization section to sort and organize your products:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-ecomprods",src:a(59470).Z,width:"562",height:"503"})),(0,i.kt)("p",null,"When you click choose Product type, Vendor, Tags and Collections, you might see nothing in the list from the very beginning."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-ecomprods",src:a(37829).Z,width:"203",height:"162"})),(0,i.kt)("p",null,'Don\'t worry, you can easily create one by just typing in a new name, then click the name to create a new one. See the picture above. However, for creating a new collection, you will need to access "Collections", see next.'),(0,i.kt)("h3",{id:"variants"},"Variants"),(0,i.kt)("p",null,'If a product has multiple options, use "Variants".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-variants",src:a(8861).Z,width:"558",height:"563"})),(0,i.kt)("p",null,'In the above screenshot, tick the checkbox first and give an option name such as size, color, weight, etc (maximum 2 options). Then in "Option Values", list all the available values of that option by typing in the field e.g. 128G and input a comma or hit the "enter" key on your keyboard. Then you will see it jump in a blue box with a delete button.\nAfter you setup all the options, you can edit the price of each variant.\xa0',(0,i.kt)("strong",{parentName:"p"},'Click "Save" to create the product'),"\xa0and click the pencil icon to back to the editing page to add more details of the variant including photo, compared price, inventory, etc:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-variants",src:a(90372).Z,width:"1186",height:"897"})),(0,i.kt)("p",null,"This is how it will look like in the shopping UI:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-variants",src:a(1694).Z,width:"468",height:"1013"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"TIP\nIn my case, I have color and size options. Since for color I have different photos, but for size, no. So I need to put color as the first option, because only the first option shows variant photos."))),(0,i.kt)("h3",{id:"collections"},"Collections"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-collections",src:a(75591).Z,width:"1582",height:"446"})),(0,i.kt)("p",null,"When you create new collections, you can add products to the collection in 2 ways:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-collections",src:a(25053).Z,width:"1920",height:"969"})),(0,i.kt)("p",null,"Manually add existing products to it"),(0,i.kt)("p",null,'You need to choose the "Manual" option and save it first, then click the pencil mark to add products. When you add products, you can click the "Search" button without any keyword to get the full list of all existing products, or type in any keyword to search.'),(0,i.kt)("p",null,"Add automatically by giving conditions"),(0,i.kt)("p",null,'Set up the conditions before you save the creation. "all conditions" means only the product which matches all conditions listed here will be added to this collection. While "any condition" means, the product which matches any one of the conditions listed here will be added.'),(0,i.kt)("h3",{id:"discounts"},"Discounts"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-discounts",src:a(35589).Z,width:"1579",height:"359"})),(0,i.kt)("p",null,'Select the "Discounts" tag and click "Create Discount".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-discounts",src:a(54601).Z,width:"1800",height:"937"})),(0,i.kt)("p",null,'Use "Generate code" to get a random code or name one by yourself.\nFeel free to customize the rest details for the discount. Once done, click "Save".'),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you get system errors, being unable to create a discount. Please leave it for now, we are working on this feature and will get this solved as soon as possible. Sorry about any inconvenience."))),(0,i.kt)("h3",{id:"shopping-carts"},"Shopping Carts"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-shoppingcart",src:a(27443).Z,width:"1551",height:"411"})),(0,i.kt)("p",null,'Here is where you check users\' cart information. Click on the "x items" button to view item details like this:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-shoppingcart",src:a(26117).Z,width:"1260",height:"498"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"fter checkout, the items will be removed from carts and added to orders."))),(0,i.kt)("h3",{id:"orders"},"Orders"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-orders",src:a(35173).Z,width:"1535",height:"816"})),(0,i.kt)("p",null,'All the order histories are listed under "Orders". Again, click on the "x items" button to view item details.'),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"IMPORTANT\na series of basic information like store information, shipping method and payment method have to be set before you test the checkout process. For example, if you didn't add any payment method in the settings, you might find yourself unable to open the checkout page."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-settings",src:a(34370).Z,width:"1536",height:"410"})),(0,i.kt)("p",null,"Leave your store details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-settings",src:a(40753).Z,width:"1343",height:"301"})),(0,i.kt)("p",null,'Check all available shipping methods. If "Pick up" is checked, do make sure you fill in your "Store address" above "Shipping method".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-settings",src:a(64713).Z,width:"1515",height:"345"})),(0,i.kt)("p",null,"Check all available payment method and select currency."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-settings",src:a(96234).Z,width:"1514",height:"313"})),(0,i.kt)("p",null,'Finally, add prefix or suffix to your order ID if needed.\nAll these settings can be accessed in the "SHOP" JSON in the flow. Check\xa0"SHOP" JSON Variable.'),(0,i.kt)("h2",{id:"use-ecommerce-in-flow"},"Use Ecommerce in Flow"),(0,i.kt)("p",null,'You can check this "Ecommerce Template" for inspiration after you set up your ecommerce system.'),(0,i.kt)("h3",{id:"show-products"},"Show Products"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-showproduct",src:a(51774).Z,width:"1653",height:"861"})),(0,i.kt)("p",null,'In a Send Message step, find "Ecommerce"(1), "Product"(2) and then click "Edit"(3). Buttons added at area 4 will show under each product. And don\'t forget to put prompt at area 5 in case no product matched.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-showproduct",src:a(64397).Z,width:"1456",height:"704"})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to the fact that Facebook allows only 10 cards displayed at one time, you might need to apply a filter to narrow down the products."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose how many products to show, from 1 to 10")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"select a sorting condition according to the user's choice")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"set a filter with as many conditions as required."))),(0,i.kt)("h3",{id:"add-to-cart"},"Add to Cart"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-addtocart",src:a(83234).Z,width:"868",height:"872"})),(0,i.kt)("p",null,'Select "Add to cart" when the button is pressed. It is good to prompt what was added as well. Get information of the added product from the\xa0"SHOP" JSON variable.'),(0,i.kt)("h3",{id:"show-cart"},"Show Cart"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-showcart",src:a(55147).Z,width:"1652",height:"860"})),(0,i.kt)("p",null,'Find "Shopping Cart" under "Ecommerce", click "Edit". Again, any button put at area 4 will display with every product.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-showcart",src:a(47353).Z,width:"1398",height:"624"})),(0,i.kt)("p",null,'The edit page of "showing cart" is similar to the "showing product"\'s. But it\'s a bit trickier. Because a cart has to show every product for reviewing before checkout.'),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'TIP\nIf a customer picks more than 10 products but below 20, try using "Newest" to show the first 10 and "Oldest" to show the rest. It\'s rare, but what if it\'s more than 20? Maybe try listing products by price range or first letter. Alternatively, you can also customize some Send Message steps to show the cart rather than using the "showing cart" function. Access cart information in\xa0',(0,i.kt)("a",{parentName:"p",href:"https://docs.uchat.com.au/ecommerce/ecommerce-action.html#cart-information"},'"SHOP" JSON variable'),'\xa0and "$.cart.num" of "SHOP" for items number in the cart.'))),(0,i.kt)("h3",{id:"remove-from-cart"},"Remove from cart"),(0,i.kt)("p",null,'Select "Remove from cart" when the button is pressed. You might want to use a ',(0,i.kt)("strong",{parentName:"p"},"Goto")," step to go to the cart again to refresh, since there are quantities shown with products that differ from showing a static menu."),(0,i.kt)("h3",{id:"empty-cart"},"Empty Cart"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-emptycart",src:a(82674).Z,width:"1652",height:"856"})),(0,i.kt)("p",null,'Select "Empty Cart" when the quick reply is pressed. Why not button? Because it can be redundant to have more than one empty cart following all products. Besides, "Empty Cart" is in the Action step, not a button action. So you will need to select an Action step as the next step to the quick reply.'),(0,i.kt)("h3",{id:"checkout"},"Checkout"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"to simulate the checkout process, you will have to set up your payment Integration as well.  We will update how to setup payment gateway"))),(0,i.kt)("p",null,'We\'ve just talked about it\'s redundant to have an "Empty Cart" button with every product, but why put multiple "Checkout"? This is because, actions in the Action step is processed at the backend while "Checkout" requires the frontend to open a website, the checkout page. So you can only call "Checkout" at a button.'),(0,i.kt)("p",null,'If you don\'t want to put "Checkout" under each product, try adding one more text-type information after showing the cart:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-checkout",src:a(67510).Z,width:"415",height:"769"})),(0,i.kt)("p",null,"When users checkout, a list of products will show with quantity and price first, following by an area to leave users' contact details:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-checkout",src:a(67510).Z,width:"415",height:"769"})),(0,i.kt)("p",null,"Keep scrolling down you will see delivery options, coupon code and a summary of the order."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-checkout",src:a(67510).Z,width:"415",height:"769"})),(0,i.kt)("p",null,'Finally, by selecting a payment option and clicking "Pay $xx.xx", the page will be directed to Payment gateway. If you are under a text mode, you will see Authorize payment.'),(0,i.kt)("p",null,'Click "AUTHORIZE TEST PAYMENT" or "FAIL TEST PAYMENT" to test what will it look like when the payment succeeds or fails.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-checkout",src:a(32542).Z,width:"500",height:"766"})),(0,i.kt)("p",null,"An order confirmation will be sent when payment succeed. Click on the confirmation to view the order detail."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-checkout",src:a(15539).Z,width:"504",height:"943"})),(0,i.kt)("h3",{id:"buy-only-one-product"},"Buy Only One Product"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-onlyone",src:a(27498).Z,width:"1463",height:"736"})),(0,i.kt)("p",null,'"Buy" is actually a feature having nothing to do with the built-in ecommerce system. After setting up your payment Integration, users can purchase one product (can be from your payment account) with one click on the "Buy" button with no ecommerce system setting at all.\nThe feature is suitable for ticket product without options or paying subscription fees, etc.'),(0,i.kt)("h3",{id:"how-to-use-system-json-variable"},"How to use System JSON Variable"),(0,i.kt)("p",null,"There are several system field storing information about the ecommerce system. Usually, the system will tell you where to find according to data like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-systemjson",src:a(78155).Z,width:"868",height:"872"})),(0,i.kt)("p",null,"You can access them wherever you see ",(0,i.kt)("inlineCode",{parentName:"p"},'"</>"')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-systemjson",src:a(78155).Z,width:"868",height:"872"})),(0,i.kt)("h3",{id:"system-json---shop"},'System JSON - "SHOP"'),(0,i.kt)("p",null,'"SHOP" stores all information about your ecommerce settings.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-jsonshop",src:a(56282).Z,width:"473",height:"555"})),(0,i.kt)("h3",{id:"system-json---order"},'System JSON - "ORDER"'),(0,i.kt)("p",null,'"ORDER" stores the user\'s last order. You only get an order after checkout.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-jsonorder",src:a(1992).Z,width:"410",height:"560"})),(0,i.kt)("h3",{id:"system-json---cart"},'System JSON - "CART"'),(0,i.kt)("p",null,'"CART" stores the user\'s shopping cart.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-jsoncart",src:a(70002).Z,width:"499",height:"552"})),(0,i.kt)("h3",{id:"system-json---select"},'System JSON - "SELECT"'),(0,i.kt)("p",null,'When you choose "Select" when a button pressed, the selected item is stored in "SELECT".\nSELECT.product:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-jsonselect",src:a(72068).Z,width:"544",height:"526"})),(0,i.kt)("p",null,"SELECT.sku:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-jsonselect",src:a(42969).Z,width:"490",height:"557"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"In Progress")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page is in progress"))),(0,i.kt)("h3",{id:"single-buy-button"},"Single Buy Button"),(0,i.kt)("p",null,'You can also sell products that are pre-set in your Stripe account with a single "Buy" button (only buy one item at a time, no add to cart).'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"absolutchat-singlebuy",src:a(67063).Z,width:"1360",height:"928"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IN Progress")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The documentation about how to use the single "Buy" button is still in progress. Should you have any query, please feel free to contact us via the AbsolutChat Support: ',(0,i.kt)("a",{parentName:"p",href:"mailto:support@absolutchat.com"},"support@absolutchat.com")))))}p.isMDXComponent=!0},83234:function(t,e,a){e.Z=a.p+"assets/images/addtocart-f86ba40d2323f9ce942fb7cdc9a07bd8.png"},14076:function(t,e,a){e.Z=a.p+"assets/images/builtinecom-a51c23fcb3c584eb56ec02bde544aa07.png"},67510:function(t,e,a){e.Z=a.p+"assets/images/checkout-2cc0dcfb8ce85b193fba0ee9ffd9899c.png"},32542:function(t,e,a){e.Z=a.p+"assets/images/checkout4-7d1281df8908150ea61f7edc847d17fa.png"},15539:function(t,e,a){e.Z=a.p+"assets/images/checkout5-7a288e2b8e42b7e905c04d9d895550be.png"},75591:function(t,e,a){e.Z=a.p+"assets/images/collections-faef11596947deed91c76196c012917d.png"},25053:function(t,e,a){e.Z=a.p+"assets/images/collections2-f2020c6f81679252695c185ba4bd763a.png"},35589:function(t,e,a){e.Z=a.p+"assets/images/discounts-70ec0060f0f40160d34b60c918b3c9d6.png"},54601:function(t,e,a){e.Z=a.p+"assets/images/discounts1-c536d3abaa63e439098cd7fb568d9821.png"},41730:function(t,e,a){e.Z=a.p+"assets/images/ecomprods-6f108c23cea152c8aaef7811011c5856.png"},61265:function(t,e,a){e.Z=a.p+"assets/images/ecomprods2-39b5ce147d0bac426832a5abf344219d.png"},59470:function(t,e,a){e.Z=a.p+"assets/images/ecomprods3-6ba9cdf4b2f5929b48bc238dee7e55cf.png"},37829:function(t,e,a){e.Z=a.p+"assets/images/ecomprods4-0f3339520373e6238cf5ec1215e39c44.png"},82674:function(t,e,a){e.Z=a.p+"assets/images/emptycart-9d7ed59cb6dc2185108f626d56c2faf8.png"},70002:function(t,e,a){e.Z=a.p+"assets/images/jsoncart-cf0836ead78b585686921c8a050a613b.png"},1992:function(t,e,a){e.Z=a.p+"assets/images/jsonorder-1e0d5263233878b9cbb4d532e6a71969.png"},72068:function(t,e,a){e.Z=a.p+"assets/images/jsonselect-9a82886d204ece8057dc516a8c45af0b.png"},42969:function(t,e,a){e.Z=a.p+"assets/images/jsonselect2-63ac86a6700288d5d1762c9b8386d814.png"},56282:function(t,e,a){e.Z=a.p+"assets/images/jsonshop-fda3d64ab5e603b77ef8a0ff2986126c.png"},27498:function(t,e,a){e.Z=a.p+"assets/images/onlyoneproduct-163c7221e5794ec34b827ee568e918a3.png"},35173:function(t,e,a){e.Z=a.p+"assets/images/orders-3b3951dcb6518dae09bb6624439f361b.png"},34370:function(t,e,a){e.Z=a.p+"assets/images/settings-d3551b18d1d29a22a27cd873c5824ac1.png"},40753:function(t,e,a){e.Z=a.p+"assets/images/settings2-56d0b6cadbc294428fffa43677d326a7.png"},64713:function(t,e,a){e.Z=a.p+"assets/images/settings3-afa6eb408430ba79eb5a539807b5def1.png"},96234:function(t,e,a){e.Z=a.p+"assets/images/settings4-b41d6cc442e81465cc655112ad154a7e.png"},27443:function(t,e,a){e.Z=a.p+"assets/images/shoppingcart-bcef5400a269b0a65c37689fd287eba5.png"},26117:function(t,e,a){e.Z=a.p+"assets/images/shoppingcart2-4d87ccbc7000a867b7a2e0facfa2eae2.png"},55147:function(t,e,a){e.Z=a.p+"assets/images/showcart-2cbf47aab53534f407584080494281de.png"},47353:function(t,e,a){e.Z=a.p+"assets/images/showcart2-ee9290e0a7a19d71a85510c92daebf6e.png"},51774:function(t,e,a){e.Z=a.p+"assets/images/showproducts-66cbc5bb937d0406e664b518e002c4f9.png"},64397:function(t,e,a){e.Z=a.p+"assets/images/showproducts2-7480864501b43f9837ac38521acec4e3.png"},67063:function(t,e,a){e.Z=a.p+"assets/images/singlebuy-5bc2fabe0660ea64cdfd9ce32dfc8cd5.png"},78155:function(t,e,a){e.Z=a.p+"assets/images/systemjson-b7149bbfc00f1f44c1f92ace4447e18a.png"},8861:function(t,e,a){e.Z=a.p+"assets/images/variants-288c89f7e7b6ae593aea2ed9800c354a.png"},90372:function(t,e,a){e.Z=a.p+"assets/images/variants2-1fc4632dc696d79bc2f427025430232d.png"},1694:function(t,e,a){e.Z=a.p+"assets/images/variants3-37f21692f0f458cf06105567feea59f2.png"}}]);