import React from 'react';

function MemoComp({ name }: { name: string }) {
    console.log("MEMO COMPONENT")
    return (
        <div>
            Memocomp {name}
        </div>
    );
}

// HOC, adds something to the component, probably shouldComponentUpdate
// PURE COMPONENT for function
export default React.memo(MemoComp);