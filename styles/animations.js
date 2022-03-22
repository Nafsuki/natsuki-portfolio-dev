export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
   },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
   },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .3,
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
   },
}
