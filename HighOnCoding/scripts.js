// header
// - h1
// - nav
//   - a
//   - a

const container = document.getElementById("container");

document.body.style.fontFamily = "sans-serif";

const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "65a6f3";
header.style.display = "flex";
header.style.padding = "6px 20px";
header.style.marginTop = "26px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.fontSize = "36px";
heading1.style.paddingRight = "40px";
heading1.style.fontWeight = "600";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "40px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "24px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "24px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
link2.style.fontWeight = "100";
topNav.appendChild(link2);

container.appendChild(header);

// main
//  billboard 
//  - h2
//    - p

const main = document.createElement("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";

const billboard = document.createElement("div");
billboard.style.backgroundColor = "dddee0"
billboard.style.display = "flex";
billboard.style.flexDirection = "column";
billboard.style.width = "90%";
billboard.style.paddingLeft = "20px";
billboard.style.paddingRight = "20px";
billboard.style.marginTop = "20px";
main.appendChild(billboard)

const heading2 = document.createElement("h2");
heading2.textContent = "Curse of the Current Reviews";
heading2.style.fontSize = "30px";
heading2.style.color = "#54585e";
billboard.appendChild(heading2);

const billboardParagraph = document.createElement("p");
billboardParagraph.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
billboardParagraph.style.fontSize = "14px";
billboard.appendChild(billboardParagraph);

container.appendChild(main);

// section
//  first div
//   - h3
//   - p
//   - bottom div
//  second div
//   - h3
//   - p
//   - bottom div

const section = document.createElement("section");
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.maxWidth = "92%"
section.style.justifyContent = "center";

const firstDiv = document.createElement("div");
firstDiv.style.width = "100%";
section.append(firstDiv)

const firstH3 = document.createElement("h3");
firstH3.style.color = "2866ba";
firstH3.textContent = "Hello WatchKit";
firstH3.style.fontWeight = "400";
firstH3.style.paddingLeft = "5px"
firstH3.style.marginTop = "20px";
firstH3.style.marginBottom = "0px";
firstH3.style.fontSize = "24px";
firstDiv.append(firstH3);

const firstPara = document.createElement("p");
firstPara.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
firstPara.style.paddingLeft = "5px";
firstPara.style.fontSize = "14px";
firstPara.style.marginTop = "10px";
firstPara.style.marginBottom = "5px";
firstDiv.append(firstPara);

const firstBottomDiv = document.createElement("div");
firstBottomDiv.style.color = "white";
firstBottomDiv.style.backgroundColor = "#ff9900";
firstBottomDiv.style.display = "flex";
firstBottomDiv.style.padding = "5px";
firstBottomDiv.style.marginTop = "0px";
firstBottomDiv.style.fontWeight = "500";
firstDiv.append(firstBottomDiv)

const textLeft = document.createElement("div");
textLeft.textContent = "12 comments"
firstBottomDiv.append(textLeft);

const textRight = document.createElement("div");
textRight.textContent = "124 Likes"
textRight.style.paddingLeft = "40px";
firstBottomDiv.append(textRight);

const secondDiv = document.createElement("div");
secondDiv.style.width = "100%";
section.append(secondDiv)

const secondH3 = document.createElement("h3");
secondH3.style.color = "2866ba";
secondH3.textContent = "Introduction to Swift";
secondH3.style.fontWeight = "400";
secondH3.style.paddingLeft = "5px"
secondH3.style.marginTop = "20px";
secondH3.style.marginBottom = "0px";
secondH3.style.fontSize = "24px";
secondDiv.append(secondH3);

const secondPara = document.createElement("p");
secondPara.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a  fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
secondPara.style.paddingLeft = "5px";
secondPara.style.fontSize = "14px";
secondPara.style.marginTop = "10px";
secondPara.style.marginBottom = "5px";
secondDiv.append(secondPara);

const secondBottomDiv = document.createElement("div");
secondBottomDiv.style.color = "white";
secondBottomDiv.style.backgroundColor = "#ff9900";
secondBottomDiv.style.display = "flex";
secondBottomDiv.style.padding = "5px";
secondBottomDiv.style.marginTop = "0px";
secondBottomDiv.style.fontWeight = "500";
secondDiv.append(secondBottomDiv)

const textLeftTwo = document.createElement("div");
textLeftTwo.textContent = "15 comments"
secondBottomDiv.append(textLeftTwo);

const textRightTwo = document.createElement("div");
textRightTwo.textContent = "45 Likes"
textRightTwo.style.paddingLeft = "40px";
secondBottomDiv.append(textRightTwo);

main.append(section);