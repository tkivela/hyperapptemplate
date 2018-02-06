export default delta => state => {
  return {
    count: state.count + delta
  }
}
