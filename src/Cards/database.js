import { getDatabase, ref, onValue } from "firebase/database";

const database = getDatabase();

export default function data(id) {
  const  ref = ref(`https://hack-ysu-april-8th-2022-default-rtdb.firebaseio.com/${id}`);

  ref.on("value", (snapshot) => {
    console.log(snapshot.val())
  })

    return () => ref.off;

}