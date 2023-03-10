const HistoryContainer = (props: {children: any}) =>
{
    return(<div className="flex flex-col space-y-5 mt-5 w-full justify-center">{props.children}</div>)
};

export default HistoryContainer;