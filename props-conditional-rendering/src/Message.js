import RegularArticle from "./RegularArticle";

export default function Message({ message
                        , children}) {
    return (
        <div className="card"> 
            <div className="card-header">
                {message}
            </div>
            <div className="card-body">
                {children}

                <RegularArticle  article={{title:"Your Fav Book is here", body: "New 1 Body"}} />
            </div>
        </div>
    )
}

/*
-- App ( theme ) - Declare - Lifting the state up   [Context]
   -- Message  app -> message
        -- Article ( theme )  app -> message -> article
              -- Share ( theme )  app -> message -> article -> share   [Context]
              -- Like  ( theme )

   -- Footer (theme)
   -- Menu (theme)*/