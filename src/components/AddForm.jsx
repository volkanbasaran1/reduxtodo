import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";

const AddForm = () => {
    // dispatch kurulum
    const dispatch = useDispatch()


    //  form gönderilmesi 
    const handleSumbit = (e) => {
        e.preventDefault();

        // todo objesi oluşturma
        const newTodo = {
            id: v4(),
            text: e.target[0].value,
            is_done: false,
            created_at: new Date(),
        };
        // todo problem var
        // veritabanına eklen
        axios.post("/todos", newTodo)
            .then(() =>
                // veritabanına eklendiyse: store'u güncelle
                dispatch(addTodo(newTodo)))
                // veri tabanına eklenmediyse:kullanıcıya haber ver
                .catch(()=>alert("üzgünüz bir sorun oluştu"));
};



    return (
        <form onSubmit={handleSumbit} className="d-flex gap-2 justify-content-center">
            <input className="form-control" type="text" />
            <button className="btn btn-lg btn-outline-light">Ekle</button>
        </form>
    )
}

export default AddForm