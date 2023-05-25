import { ref } from 'vue'
import { getSelectListByType, getPositionListByType } from '@/api'
import { getToken } from '@/utils/auth'
import { replaceRouteQuery } from '@/router'

const nationList = ref([])
const certTypeList = ref([])
const techJobList = ref([])
const positionList = ref([])

const degreeList = ref([])
const eduList = ref([])
const degreeTypeList = ref([])
const schoolList = ref([])
const langList = ref([])
const politicalList = ref([])
const partyJobList = ref([])
const adminJobList = ref([])
const subjectList = ref([])

export const usePreSelectList = () => {
  if (!getToken()) {
    replaceRouteQuery({
      step: 0,
      type: 'pre',
    })
    return {
      nationList,
      certTypeList,
      techJobList,
      positionList,
    }
  }
  // 国籍
  !nationList.value.length && getSelectListByType(2).then(res => {
    nationList.value = res.result || []
  })
  // 证件类型
  !certTypeList.value.length && getSelectListByType(10).then(res => {
    certTypeList.value = res.result || []
  })
  // 专业
  !subjectList.value.length && getSelectListByType(7).then(res => {
    subjectList.value = res.result || []
  })
  // 专业技术职务
  !techJobList.value.length && getSelectListByType(6).then(res => {
    techJobList.value = res.result || []
  })
  // 职称列表
  !positionList.value.length && getPositionListByType(0).then(res => {
    positionList.value = res.result || []
  })
  return {
    nationList,
    certTypeList,
    techJobList,
    positionList,
  }
}
export const useAddSelectList = () => {
  if (!getToken()) {
    replaceRouteQuery({
      step: 0,
      type: 'pre',
    })
    return {
      eduList,
      degreeList,
      degreeTypeList,
      schoolList,
      subjectList,
      langList,
      politicalList,
      partyJobList,
      adminJobList,
      techJobList,
    }
  }
  // 学位类型
  !degreeTypeList.value.length && getSelectListByType(0).then(res => {
    degreeTypeList.value = res.result || []
  })
  // 兼职院校
  !schoolList.value.length && getSelectListByType(9).then(res => {
    schoolList.value = res.result || []
  })
  // 学历
  !eduList.value.length && getSelectListByType(11).then(res => {
    eduList.value = res.result || []
  })
  // 学位
  !degreeList.value.length && getSelectListByType(12).then(res => {
    degreeList.value = res.result || []
  })
  // 专业
  !subjectList.value.length && getSelectListByType(7).then(res => {
    subjectList.value = res.result || []
  })
  // 可评语种
  !langList.value.length && getSelectListByType(13).then(res => {
    langList.value = res.result || []
  })
  // 政治面貌
  !politicalList.value.length && getSelectListByType(3).then(res => {
    politicalList.value = res.result || []
  })
  // 党内职务
  !partyJobList.value.length && getSelectListByType(4).then(res => {
    partyJobList.value = res.result || []
  })
  // 行政职务
  !adminJobList.value.length && getSelectListByType(5).then(res => {
    adminJobList.value = res.result || []
  })
  // 专业技术职务
  !techJobList.value.length && getSelectListByType(6).then(res => {
    techJobList.value = res.result || []
  })
  return {
    eduList,
    degreeList,
    degreeTypeList,
    schoolList,
    subjectList,
    langList,
    politicalList,
    partyJobList,
    adminJobList,
    techJobList,
  }
}
