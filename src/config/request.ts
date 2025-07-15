import { db } from "./firebase";
import { collection, getDocs, } from "firebase/firestore";

export const fetchProjects = async () => {
  const snapshot = await getDocs(collection(db, "portfolios"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};