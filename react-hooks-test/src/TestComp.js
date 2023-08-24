import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function TestComp() {

    const { t , i18n} = useTranslation();

    let [header,setHeader] = useState("Hello World");
    let [todo,setToDoItems] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/todos")
            .then((response) => {
                setToDoItems([...response.data.todos]);
            });

    },[]);

    return (
        <div>
          
            <h1 className={ header == "Hello World" ? 'text-primary' : 'text-warning' }>{t('Heading')}</h1>

            <button type="button" role="btn" onClick={() => i18n.changeLanguage("de")}>German</button>
            <button type="button" role="btn" onClick={() => i18n.changeLanguage("en")}>English</button>

            <ul>
                {todo.map((item) => { return <li role="listitem" key={item.id}>{item.todo}</li> })}</ul>
        </div>
    )
}