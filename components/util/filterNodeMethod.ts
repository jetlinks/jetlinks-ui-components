import { cloneDeep } from 'lodash-es'

interface TreeNode<T> {
  children?: T[]
  visible?: boolean
}

/**
 * 筛选树形结构
 * @param data 树形数据数组
 * @param filter 过滤参数值
 * @param filterType 过滤参数名
 * @returns 过滤后树形结构
 */
export function treeFilter<T extends TreeNode<T>>(data: T[], filter: string, filterType = 'title'){
  const _data = cloneDeep(data)
  const traverse = (item: T[]) => {
    item.forEach((child) => {
      child.visible = filterMethod(filter, child, filterType)
      if (child.children) {
        traverse(child.children)
      }
      if (!child.visible && child.children?.length) {
        child.visible = child.children.some((c) => c.visible)
      }
    })
  }
  traverse(_data)
  return filterDataByVisible(_data)
}

// 根据传入的值进行数据匹配, 并返回匹配结果
function filterMethod<T>(val: string, data: T, filterType: string) {
  return data[filterType].includes(val)
}

// 递归过滤符合条件的数据
function filterDataByVisible<T extends TreeNode<T>>(data: T[]){
  return data.filter((item) => {
    if (item.children) {
      item.children = filterDataByVisible(item.children)
    }
    return item.visible
  })
}