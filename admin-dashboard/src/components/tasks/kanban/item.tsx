import { DragOverlay, useDraggable, UseDraggableArguments } from '@dnd-kit/core'

interface Props  {
    id: string;
    data?: UseDraggableArguments['data']
}

const KanbanItem = ({children, id, data}: React.PropsWithChildren<Props>) => {
    const {attributes, listeners, setNodeRef, active } = useDraggable({id, data })
  return (
    <div
    style={{
        position:'relative',
        
    }}
    >
        <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={{
            opacity: active ? (active.id === id ? 1 : 0.5) : 1,
            borderRadius: '8px',
            position: 'relative',
            cursor: 'grab',
            
            // boxShadow: active?.id === id ? 'none' : '-4px 10px 33px 7px rgba(0,0,0,0.6) inset', 
        }}
        >
            {active?.id === id && (
                <DragOverlay zIndex={1000}>
                    <div style={
                        { 
                            borderRadius: '8px',
                            boxShadow:'8px 8px 24px 0px rgba(66, 68, 90, 1)',
                            cursor: 'grabbing'
                        }}>
                            {children}
                    </div>
                </DragOverlay>
            )}
            {children}
        </div>
    </div>
  )
}

export default KanbanItem