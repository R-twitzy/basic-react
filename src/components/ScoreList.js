export default function ScoreList(props){
    let avg=(props.math + props.english + props.chemistry)/3
    if (avg >= 75) {
        var cl="fa fa-check-square text-success"
        var ket="passed "
    } else{
        var cl="fa fa-minus-square text-danger"
        var ket="not passed "
    }
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.math}</td>
            <td>{props.english}</td>
            <td>{props.chemistry}</td>
            <td>{avg.toFixed()}</td>
            <td class="text-end">
                <span class="ms-1">{ket}</span>
                <i class={cl}></i>
            </td>
        </tr>
    )
}