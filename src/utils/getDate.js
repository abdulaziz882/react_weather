export function getDate (dt, type) {
    
    const date = new Date(dt * 1000)
    
    return  type == 'week'   ? date.toLocaleString('ru-RU', { weekday : 'short' })  :
            type == 'day'    ? date.toLocaleString('ru-RU', { day :'numeric' })     :
            type ==  'month' ? date.toLocaleString('ru-RU', { month: 'short' })     : ''
    
}