import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css"
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { db } from "../../../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore"
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";



function Nav() {
    const [id, setId] = useState(1)
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([])
    const itemsCollectionRef=collection(db,"items")


    const addNewItemIntoDb = () => {
        addDoc(collection(db, 'items'),
            {
                id: id,
                name: newItem,
                task: [],
                status: false
            }
        )
        setId(id + 1);
        setNewItem("")

    }


    const handleAddItem = (e) => {
        setNewItem(e.target.value)
    }

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getDocs(itemsCollectionRef);

            // console.log(doc.data())
            await setItems(data.docs.map((doc) => {
                return { ...doc.data() }
            }
            ))

            // console.log(data.docs[1].data())
            

        }
        fetchItems();
        
        

    }, [])
    setTimeout(()=>{
        console.log(items)
    },2000)
   

    return (
        <React.Fragment>
            <div className={styles.nav}>
                <div className={styles.showItem}>
                    {items.map((item) => {
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label={item.name} />
                        </FormGroup>
                        
                    })}
                </div>
                <div className={styles.addTodoItem}>
                    <TextField id="standard-basic" label="Create a new to do..." variant="standard" onChange={(e) => { handleAddItem(e) }} value={newItem} />
                    <AddIcon onClick={addNewItemIntoDb} />
                </div>

            </div>
        </React.Fragment>

    );
}

export default Nav;