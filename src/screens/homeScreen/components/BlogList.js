import BlogRow from "./BlogRow";

export default function BlogList(props) {
    let rowList = [];
    let rowItems = [];
    const maxItems = 3;

    for (let i = 0; i < props.list.length; ++i) {
        let item = props.list[i];

        if ((i + 1) % maxItems === 0 || i === (props.list.length - 1)) {
            rowItems.push(item);
            rowList.push(<div><BlogRow row={[].concat(rowItems)} onBlogClicked={(blogId) => {props.onBlogClicked(blogId);}} /></div>);
            rowItems = [];
        } else {
            rowItems.push(item);
        }
    }
    
    return <div>{rowList}</div>;
}