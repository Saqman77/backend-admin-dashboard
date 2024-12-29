import { DragOverlay, useDraggable, UseDraggableArguments } from '@dnd-kit/core'

interface Props  {
    id : string;
    data?: UseDraggableArguments['data']
}

const KanbanItem = ({children, data, id}: React.PropsWithChildren<Props>) => {
    const {attributes, listeners, setNodeRef, active } = useDraggable({id, data })
  return (
    <div
    style={{
        position:'relative'
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
            cursor: 'grab'
        }}
        >
            {active?.id === id && (
                <DragOverlay zIndex={1000}>
                    <div style={
                        { 
                            borderRadius: '8px',
                            boxShadow:'box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
                            cursor: 'grabbing'
                        }
                        }>
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