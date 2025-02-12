// components/AppSidebar.tsx
import React from 'react';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ChevronDown,
  Users,
  Package,
  ShoppingCart,
  Building2,
  Building,
  BarChart3,
  Brain,
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: number;
  submenu?: { label: string; path: string }[];
}

const menuItems: MenuItem[] = [
  {
    icon: <Users className="h-4 w-4" />,
    label: 'User Management',
    path: '/user-management',
    badge: 0,
    submenu: [
      { label: 'Customer', path: '/user-management/customer' },
      { label: 'Karyawan', path: '/user-management/karyawan' },
      { label: 'Supplier', path: '/user-management/supplier' },
    ],
  },
  {
    icon: <Package className="h-4 w-4" />,
    label: 'Asset Management',
    path: '/asset-management',
    submenu: [
      { label: 'Produk', path: '/asset-management/produk' },
    ],
  },
  {
    icon: <ShoppingCart className="h-4 w-4" />,
    label: 'Penjualan',
    path: '/penjualan',
    submenu: [
      { label: 'Form Jual', path: '/penjualan/form' },
      { label: 'Riwayat', path: '/penjualan/history' },
    ],
  },
  {
    icon: <Building2 className="h-4 w-4" />,
    label: 'Pengadaan Cabang',
    path: '/pengadaan-cabang',
    submenu: [
      { label: 'Form Pengadaan', path: '/pengadaan-cabang/form' },
      { label: 'Riwayat', path: '/pengadaan-cabang/history' },
    ],
  },
  {
    icon: <Building className="h-4 w-4" />,
    label: 'Pengadaan Pusat',
    path: '/pengadaan-pusat',
    submenu: [
      { label: 'Form Pengadaan', path: '/pengadaan-pusat/form' },
      { label: 'Riwayat', path: '/pengadaan-pusat/history' },
    ],
  },
  {
    icon: <BarChart3 className="h-4 w-4" />,
    label: 'Laporan Keuangan',
    path: '/laporan-keuangan',
    submenu: [
      { label: 'Submenu 1', path: '/laporan-keuangan/submenu-1' },
      { label: 'Submenu 2', path: '/laporan-keuangan/submenu-2' },
    ],
  },
  {
    icon: <Brain className="h-4 w-4" />,
    label: 'Decision Support System',
    path: '/dss',
    submenu: [
      { label: 'Submenu 1', path: '/dss/submenu-1' },
    ],
  },
];

const AppSidebar = () => {
  return (
    <Sidebar className="h-[calc(100vh-4rem)] pt-20" collapsible='icon'>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <Collapsible defaultOpen className="w-full">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="w-full justify-start gap-4">
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge !== undefined && (
                      <span className="ml-auto mr-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.submenu?.map((sub) => (
                      <SidebarMenuSubItem key={sub.path}>
                        <SidebarMenuSubButton asChild>
                          <Link 
                            href={sub.path} 
                            className="w-full px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {sub.label}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;