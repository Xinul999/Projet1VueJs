import {reactive} from "vue";
import produitsChargement from "@/data/model.json";

export const store = reactive({
    produits: produitsChargement.map(p =>( {...p, isSelect: false} ))
});
