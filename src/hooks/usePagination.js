import {useMemo} from "react";

export const usePagination = (totalPages) => {
    const getPagesArray = useMemo(() => {
        console.log("Calculating pages...")
        let pagesArray = []
        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1)
        }
        return pagesArray;
    }, [totalPages])
    return getPagesArray;
}
