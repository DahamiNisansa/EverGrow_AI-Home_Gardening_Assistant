var tl = gsap.timeline({scrollTrigger:{
  trigger: ".about",
  start: "0% 95%",
  end: "70% 50%",
  scrub: true,
}})

tl.to("#tree",{
  top: "205%",
  left: "12%",
  rotate: "10deg"
}, 'choclate')
tl.to("#butterfly",{
  top:"225%",
  left: "1%"
}, 'choclate')
tl.to("#stone",{
  width: "20%",
  top:"270%",
  right: "10%",
  rotate: "-15deg"
}, 'choclate')
tl.to("#leaves",{
  top:"210%",
  rotate: "130deg",
  left: "70%"
}, 'choclate')
tl.to("#bug",{
  top:"210%",
  rotate: "30deg",
  left: "0%"
}, 'choclate')


var tl2 = gsap.timeline({scrollTrigger:{
  trigger: ".footer",
  start: "0% 95%",
  end: "20% 50%",
  scrub: true,
}})

tl2.to("#butterfly",{
  width:"28%",
  left: "47%",
  top: "300%"
}, 'can')
tl2.to("#stone",{
  width:"15%",
  left: "35%",
  top: "380%"
}, 'can')
tl2.to("#tree",{
  width:"42%",
  top: "318%",
  left: "35%",
  rotate: "0deg"
}, 'can')

