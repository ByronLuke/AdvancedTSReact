import { type ReactNode } from "react";

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

function List<T>({items, renderItem}: ListProps<T>){
    return <ul>{items.map(renderItem)}</ul>
}

export default List;