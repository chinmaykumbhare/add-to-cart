(this["webpackJsonpadd-to-cart"]=this["webpackJsonpadd-to-cart"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(7),r=n.n(s),a=(n(13),n(14),n(2)),o=n(3),l=n(5),u=n(4),d=n(0),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={quantity:""},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.setState({quantity:sessionStorage.getItem("quantity")})}),300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"row block center",children:[Object(d.jsx)("h3",{children:"Shopping Cart"}),Object(d.jsxs)("h3",{style:{float:"right"},children:["Cart: ",this.state.quantity]})]})}}]),n}(c.Component),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).addItem=function(){var t=c.state.quantity;t+=1,c.setState({quantity:t})},c.removeItem=function(){var t=c.state.quantity;0===t?alert("cart already empty"):(t-=1,c.setState({quantity:t}))},c.state={quantity:1},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){sessionStorage.setItem("quantity",0)}},{key:"componentDidUpdate",value:function(){sessionStorage.setItem("quantity",this.state.quantity)}},{key:"render",value:function(){var t=this.props.cartItems;return Object(d.jsx)("div",{children:Object(d.jsxs)("aside",{className:"block col-1",style:{width:"18.3rem"},children:[Object(d.jsx)("h2",{children:"Cart Items"}),Object(d.jsx)("p",{children:0===t.length&&"Cart is empty"}),0!==t.length&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:{textAlign:"center"},children:[Object(d.jsx)("img",{src:t.url,height:"20px",width:"30px",style:{padding:"2px"},alt:""}),t.name," : "," RS ",t.price]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"remove",onClick:this.removeItem,children:"-"}),Object(d.jsx)("button",{className:"add",onClick:this.addItem,children:"+"}),"Quantity: ",this.state.quantity,Object(d.jsx)("hr",{}),"Total: ",this.state.quantity*t.price]})]})})}}]),n}(c.Component),p=h,m=n(8).items,b=[""],O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).onAdd=function(t){b=t,c.setState({cartItems:b})},c.state={cartItems:[]},c}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("main",{className:"block col-2",style:{width:"60rem",float:"left"},children:[Object(d.jsx)("h2",{children:"Products"}),Object(d.jsx)("div",{className:"grid-container",children:m.map((function(e,n){return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"small",src:e.url,alt:""}),Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("div",{children:["Rs ",e.price]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){t.onAdd(e)},children:"Add to cart"})})]},n)}))})]}),Object(d.jsx)("div",{style:{float:"left"},children:Object(d.jsx)(p,{cartItems:this.state.cartItems})})]})}}]),n}(c.Component);var v=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(O,{})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),x()},8:function(t){t.exports=JSON.parse('{"items":[{"id":0,"name":"product 0","price":50,"url":"https://picsum.photos/id/180/2400/1600"},{"id":1,"name":"product 1","price":100,"url":"https://picsum.photos/id/181/2400/1600"},{"id":2,"name":"product 2","price":200,"url":"https://picsum.photos/id/182/2400/1600"},{"id":3,"name":"product 3","price":300,"url":"https://picsum.photos/id/183/2400/1600"},{"id":4,"name":"product 4","price":400,"url":"https://picsum.photos/id/184/2400/1600"},{"id":5,"name":"product 5","price":500,"url":"https://picsum.photos/id/185/2400/1600"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.01ce9dce.chunk.js.map