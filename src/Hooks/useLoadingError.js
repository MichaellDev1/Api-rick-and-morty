import { useState } from "react";

export default function useLoadingError() {
    const [loading, isLoading] = useState(false);
    const [error, isError] = useState(false);

    return {loading,isLoading,isError,error}
}