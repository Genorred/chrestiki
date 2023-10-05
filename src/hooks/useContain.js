const useContains = (where, what) => {
    for(let i=0; i<where.length; i++){
      what.every((el) => where[i].includes(el))
      return true
  }
}
  export default useContains