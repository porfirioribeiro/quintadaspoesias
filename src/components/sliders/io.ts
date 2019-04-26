let io: IntersectionObserver | undefined;
const listeners = new WeakMap();

if (typeof window !== `undefined` && window.IntersectionObserver) {
  io = new window.IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (listeners.has(entry.target)) {
          const cb = listeners.get(entry.target);
          // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io!.unobserve(entry.target);
            listeners.delete(entry.target);
            cb();
          }
        }
      });
    },
    { rootMargin: `200px` }
  );
}

export const listenToIntersections = (target: Element, cb: () => void) => {
  if (io) {
    io.observe(target);
    listeners.set(target, cb);
  }

  return () => {
    if (io) {
      io.unobserve(target);
      listeners.delete(target);
    }
  };
};
