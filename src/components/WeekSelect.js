const WeekSelect = ({ func }) => {
    return (
        <div>
            <button onClick={() => func(1)}>7d</button>
            <button onClick={() => func(2)}>14d</button>
            <button onClick={() => func(4)}>28d</button>
            <button onClick={() => func(24)}>6 mo</button>
            <button onClick={() => func(52)}>YTD</button>
        </div>
    )
}

export default WeekSelect