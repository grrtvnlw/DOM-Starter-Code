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
header.style.padding = "0 20px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "20px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "18px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "18px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);

container.appendChild(header);

// main
//  billboard 
//  - h2
//    - p

const main = document.createElement("main");
main.style.border = "1px solid red";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";

const billboard = document.createElement("div");
billboard.style.color = "#54585e";
billboard.style.backgroundColor = "dddee0"
billboard.style.display = "flex";
billboard.style.flexDirection = "column";
billboard.style.width = "90%";
billboard.style.paddingLeft = "20px";
billboard.style.marginTop = "20px";
main.appendChild(billboard)

const heading2 = document.createElement("h2");
heading2.textContent = "Curse of the Current Reviews";
billboard.appendChild(heading2);

const billboardParagraph = document.createElement("p");
billboardParagraph.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
billboard.appendChild(billboardParagraph);

container.appendChild(main);

// section
//  first div
//   - h3
//   - p
//   - footer?

const section = document.createElement("section");
section.style.border = "1px solid green";
section.style.display = "flex";
section.style.width = "92%"
section.style.justifyContent = "center";

const firstDiv = document.createElement("div");
firstDiv.style.border = "1px solid blue";
firstDiv.style.width = "100%";
section.append(firstDiv)

const firstH3 = document.createElement("h3");
firstH3.style.color = "#2866ba";
firstH3.textContent = "Hello WatchKit";
firstH3.style.fontWeight = "400";
firstH3.style.paddingLeft = "5px"
firstH3.style.marginBottom = "0px";
firstDiv.append(firstH3);

const firstPara = document.createElement("p");
firstPara.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. "
firstPara.style.paddingLeft = "5px";
firstDiv.append(firstPara);


main.append(section);