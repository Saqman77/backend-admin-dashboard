import { KanbanBoard, KanbanBoardContainer } from '@/components/tasks/kanban/board'
import KanbanColumn from '@/components/tasks/kanban/column'
import KanbanItem from '@/components/tasks/kanban/kanban-item'
import { TASK_STAGES_QUERY, TASKS_QUERY } from '@/graphql/queries'
import { TaskStage } from '@/graphql/schema.types'
import { useList } from '@refinedev/core'
import React from 'react'

const List = () => {
    const { data: stages, isLoading: isLoadingStages} = useList({
        resource:'taskStages',
        filters:[
            {
                field: 'title',
                operator:'in',
                value: ['TODO', 'IN PROGRESS', 'IN REVIEW', 'DONE']
            }],
            sorters:[
                {
                    field: 'createdAt',
                    order: 'asc'
                }],
        meta:{
            gqlQuery: TASK_STAGES_QUERY
        }
    })
    const { data: tasks, isLoading: isLoadingTasks} = useList({
        resource: 'tasks',
        sorters: [
            {
                field:'dueDate',
                order: 'asc'
            }
        ],
        queryOptions: {
            enabled: !!stages,
        },
        pagination:{
            mode:'off'
        },
        meta: {
            gqlQuery: TASKS_QUERY
        }
    })

    const taskStages = React.useMemo(() => {
        if (!tasks?.data || !stages?.data){
            return {
                unnassignedStage: [],
                stages: []
            }
        }

        const unnassignedStage = tasks.data.filter((task) => task.stageId === null)
        const grouped: TaskStage[] = stages.data.map((stage) => ({
            ...stage,
            tasks: tasks.data.filter((task) => task.stageId?.toString)
        }))
    }, [stages, tasks])

  return (
    <>
    <KanbanBoardContainer>
        <KanbanBoard>
            <KanbanColumn>
                <KanbanItem>
                    this is your mom
                </KanbanItem>
            </KanbanColumn>
            <KanbanColumn>

            </KanbanColumn>
        </KanbanBoard>
    </KanbanBoardContainer>
    </>
  )
}

export default List