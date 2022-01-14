export const formatValue = 
    (
        value: string | number, 
        locale: string = 'pt-BR',
        currency: string = 'BRL'
    ) : string => {
            return Intl.NumberFormat(locale, { 
                style: 'currency',
                currency: currency }
            ).format( typeof value === 'string' ? parseFloat(value) : value );
}