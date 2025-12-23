import React, { useEffect, useMemo, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Search, Truck } from 'lucide-react';
import { useFetchCouriers } from '@/services/fetch-couriers.service';
import { useTrackingStore } from '@/stores';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Skeleton } from '../ui/skeleton';

const Loader = () => {
  return (
    <div className="space-y-2 p-2">
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-8" />
    </div>
  );
};

const SelectCouriers = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [displayLimit, setDisplayLimit] = useState(100);

  const { selectedCourier, setSelectedCourier } = useTrackingStore();

  const getCouriers = useFetchCouriers({
    enabled: open,
  });
  const couriers = useMemo(
    () => getCouriers.data?.data ?? [],
    [getCouriers.data]
  );

  const filteredCouriers = useMemo(() => {
    if (!debouncedSearch) return couriers;

    const query = debouncedSearch.toLowerCase();
    return couriers.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.slug.toLowerCase().includes(query)
    );
  }, [couriers, debouncedSearch]);

  const displayedCouriers = useMemo(() => {
    return filteredCouriers.slice(0, displayLimit);
  }, [filteredCouriers, displayLimit]);

  const hasMore = filteredCouriers.length > displayLimit;

  const handleShowMore = () => {
    setDisplayLimit((prev) => prev + 100);
  };

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-fit h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white justify-start"
        >
          <Truck className="w-4 h-4 mr-2 shrink-0" />
          <span className="truncate">
            {selectedCourier?.name ? selectedCourier.name : 'Auto Detect'}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-0" align="start">
        {getCouriers.isLoading && <Loader />}

        {!getCouriers.isLoading && (
          <Command>
            <CommandInput
              placeholder="Search courier..."
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList>
              <CommandEmpty>No courier found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  value="auto"
                  onSelect={() => setSelectedCourier(null)}
                  className="cursor-pointer"
                >
                  <Search className="w-4 h-4 mr-2" />
                  <span>Auto Detect</span>
                </CommandItem>
                {displayedCouriers.map((c) => (
                  <CommandItem
                    key={c.slug}
                    value={c.slug}
                    onSelect={() => setSelectedCourier(c)}
                    className="cursor-pointer"
                  >
                    <Truck className="w-4 h-4 mr-2" />
                    <div className="flex flex-col">
                      <span>{c.name}</span>
                      {c.slug !== c.name.toLowerCase() && (
                        <span className="text-xs text-gray-500">{c.slug}</span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            {hasMore && (
              <div className="p-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShowMore}
                  className="w-full"
                >
                  Show More
                </Button>
              </div>
            )}
          </Command>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default SelectCouriers;
