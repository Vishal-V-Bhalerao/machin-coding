import { createSlice } from '@reduxjs/toolkit'
import * as uuid from 'uuid'
interface Node {
    id: string,
    type: 'FILE' | 'FOLDER',
    name: string,
    nodes: Array<Node>;
}

const initialNode : Node = {
    id: '1',
    type: 'FILE',
    name: 'index.ts',
    nodes: []
}

const initialState = {
    showContent: false,
    nodes: [initialNode]
}

const findNodeAndUpdate = (fileTree: Array<Node>, indexToFind: string, callback: (nodeTree:Array<Node>, index: number) => {}) => {
    const resultNodeIndex = fileTree.findIndex((node) => node.id === indexToFind)
    if(resultNodeIndex && resultNodeIndex !== -1){
        callback(fileTree, resultNodeIndex)
        return true
    }
    else {
        fileTree.forEach((node) => {
            findNodeAndUpdate(node.nodes, indexToFind, callback)
        })
    }
    return false
}

const fileExplorerSlice = createSlice({
    name: 'file-explorer',
    initialState,
    reducers: {
        addNode: (state, action) => {
        if( typeof action.payload === 'object')
            {
                state.nodes.push({...action.payload, id: uuid.v1()})
            }
        },
        addChildNode: (state, action) => {
            findNodeAndUpdate(state.nodes, action.payload.parentId, (nodeList, index) => nodeList[index].nodes.push(action.payload.newNode))
        },
        updateNodeName: (state, action) => {
            findNodeAndUpdate(state.nodes, action.payload.parentId, (nodeList, index) => nodeList[index].name = action.payload.updatedName)
        },
        removeNode: (state, action) => {
            findNodeAndUpdate(state.nodes, action.payload.parentId, (nodeList, index) => nodeList.splice(index, 1))
        }
    }
})

export const FileExplorerReducer = fileExplorerSlice.reducer
export const { addNode, addChildNode, updateNodeName, removeNode  } = fileExplorerSlice.actions