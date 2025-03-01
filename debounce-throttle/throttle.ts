function throttle<T extends (...args: never[]) => unknown>(
  cb: T,
  delay: number
): T {
  let timeout: ReturnType<typeof setTimeout>
  let lastRan: number

  return ((...args) => {
    if (!lastRan) {
      cb(...args)
      lastRan = Date.now()
      return
    }

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (Date.now() - lastRan >= delay) {
        cb(...args)
        lastRan = Date.now()
      }
    }, delay - (Date.now() - lastRan))
  }) as T
}
