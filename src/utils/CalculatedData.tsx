import add from '../utils/calculator';

interface CalculatedDataProps {
    data?: string
}
export default function CalculatedData({ data = '' }: CalculatedDataProps) {
    return <>
        <strong>{add(data, true)}</strong>
    </>;
}
