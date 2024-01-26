我想要 iframe 里面，setter，与工作台 共用同一个 schema 的 引用应该如何做？ 并且要保证 更改哪个就只有哪个重渲染

工作台的 schema 是 reactive ,setter 直接更新这个 schema
但是再 iframe 里面是监听不到 schema 变化的 因为内存分开；

所以就算得有一个通知

schema 变化时 通知 渲染器 更新 => 并且要能做到 点对点的更新 更新某个 Node 那么就只更新他

immer?