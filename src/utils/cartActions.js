export const totalCount = orderGoods => orderGoods.reduce(
  (acc, item) => acc + item.count
  , 0
)

export const totalPrice = orderGoods => orderGoods.reduce(
  (acc, item) => acc + item.count * item.price
  , 0
)