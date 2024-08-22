function Welcome() {
    return (
        <div className="flex flex-col w-full h-ful px-7 py-9 gap-9 h-full">
            <div className="flex justify-between h-1/6 border">
                <div>Dashboard/home</div>
                <div>notification icon</div>
            </div>
            <div className="border h-2/6 flex flex-col justify-between">
                <div>Welcome Dear Mohammad</div>
                <div>Date</div>
                <div>time</div>
            </div>
            <div className="w-full border h-3/6 flex gap-4">
                <div className="w-1/2 h-full border">btc price</div>
                <div className="w-1/2 h-full border">tether price</div>
            </div>

        </div>
    )
}

export default Welcome