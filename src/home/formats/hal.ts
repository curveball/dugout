export default () => {

  return {
    _links: {
      self: { href: '/' },
      'room-collection': { href: '/room', title: 'Rooms'},
    },
    title: '⚾ Curveball Dugout v' + require('../../../package.json').version,
  }

}
