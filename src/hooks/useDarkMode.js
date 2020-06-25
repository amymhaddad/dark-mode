
import { useEffect, useState} from "react";
import { useLocalStorage } from "./useLocalStorage";


export default function useDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage("dark", "dark-mode");

    useEffect(() => {
        const body = document.querySelector("body")
        const navBar = document.querySelector(".navbar")

        navBar.addEventListener("click", function(event) {
            if (darkMode) {   
                body.classList.toggle("dark-mode")
            } else {
                body.classList.toggle("dark-mode")
            }
        })

    }, [darkMode])

    return [localStorage.storedValue, localStorage.setValue]
}

