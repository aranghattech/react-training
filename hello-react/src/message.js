
export default function  Message(
    {
    id = 0,
    color = 'red'
    ,isactive = 'true'
    ,message
    , onRowSelected
    })
{

    function handleClick(){
        onRowSelected(id);
    }

    function showConfirm(){
        var mesage = prompt('Enter your message');
    }

    return (
        <div className="row"  
      
        style={{color: 
                 (isactive == 'true' ?
                 color : 'grey')}}>
                    <div className="col">{message}</div>
                    <div className="col-auto">
                            <button type="button" className="btn btn-sm btn-primary"
                                onClick={showConfirm}
                            >Edit</button>
                    </div>
                    <div className="col-auto">
                            <button type="button" className="btn btn-sm btn-danger"   onClick={handleClick} >Delete</button>
                    </div>
            </div>
    )
}