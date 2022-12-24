const Coin = (props) => {
    const mentions = props.data
    return (
        <div>
            {mentions.map(mention =>
                <p>Coin mentioned at {mention.time} UNIX epoch time on {mention.source}</p>
            )}
        </div>
    )
}

export default Coin