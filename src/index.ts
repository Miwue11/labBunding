import styles from "./styles.module.css";

console.log("Valor de mi var de vite ", import.meta.env.VITE_MY_VARIABLE);

const title = document.createElement("h1");
title.textContent = "Lab bunding";
title.className = styles.title;

document.body.appendChild(title);